import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const BITRIX24_WEBHOOK_URL = Deno.env.get('BITRIX24_WEBHOOK_URL');
    if (!BITRIX24_WEBHOOK_URL) {
      throw new Error('BITRIX24_WEBHOOK_URL is not configured');
    }

    const { name, phone, area, contactMethod, packageName, style, propertyType, scope, total } = await req.json();

    if (!phone) {
      return new Response(
        JSON.stringify({ error: 'Phone is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const comment = [
      packageName ? `Пакет: ${packageName}` : '',
      style ? `Стиль: ${style}` : '',
      propertyType ? `Тип жилья: ${propertyType}` : '',
      scope ? `Объём работ: ${scope}` : '',
      area ? `Площадь: ${area} м²` : '',
      total ? `Итого: ${Number(total).toLocaleString('ru-RU')} ₽` : '',
      contactMethod ? `Способ связи: ${contactMethod}` : '',
      'Источник: сайт the-interior.ru (квиз)',
    ].filter(Boolean).join('\n');

    const webhookUrl = BITRIX24_WEBHOOK_URL.replace(/\/+$/, '');

    const res = await fetch(`${webhookUrl}/crm.lead.add.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          TITLE: `Квиз с сайта${name ? `: ${name}` : ''}`,
          NAME: name || 'Клиент с квиза',
          PHONE: [{ VALUE: phone, VALUE_TYPE: 'WORK' }],
          COMMENTS: comment,
          SOURCE_ID: 'WEB',
        },
      }),
    });

    const data = await res.json();

    if (!res.ok || data.error) {
      console.error('Bitrix24 error:', data);
      throw new Error(`Bitrix24 API error: ${JSON.stringify(data)}`);
    }

    return new Response(
      JSON.stringify({ success: true, leadId: data.result }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error creating lead:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
