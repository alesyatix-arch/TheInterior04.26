import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
<<<<<<< HEAD
import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";
=======
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

<<<<<<< HEAD
const RequestSchema = z.object({
  name: z.string().trim().max(100).optional().nullable(),
  phone: z.string().trim().min(7).max(20).regex(/^[+0-9\s\-()]+$/, 'Invalid phone format'),
  area: z.union([z.string().trim().max(10), z.number()]).optional().nullable(),
  contactMethod: z.string().trim().max(50).optional().nullable(),
  packageName: z.string().trim().max(100).optional().nullable(),
  style: z.string().trim().max(100).optional().nullable(),
  propertyType: z.string().trim().max(100).optional().nullable(),
  scope: z.string().trim().max(200).optional().nullable(),
  total: z.union([z.string().trim().max(20), z.number()]).optional().nullable(),
});

=======
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

<<<<<<< HEAD
  // Reference ID for correlating client reports with server logs
  const refId = crypto.randomUUID();

  try {
    const BITRIX24_WEBHOOK_URL = Deno.env.get('BITRIX24_WEBHOOK_URL');
    if (!BITRIX24_WEBHOOK_URL) {
      console.error(`[${refId}] BITRIX24_WEBHOOK_URL is not configured`);
      return new Response(
        JSON.stringify({ success: false, error: 'Service temporarily unavailable. Please try again later.', refId }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Cap payload size to prevent abuse (~4KB)
    const rawBody = await req.text();
    if (rawBody.length > 4096) {
      return new Response(
        JSON.stringify({ success: false, error: 'Payload too large', refId }),
        { status: 413, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    let body: unknown;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid JSON', refId }),
=======
  try {
    const BITRIX24_WEBHOOK_URL = Deno.env.get('BITRIX24_WEBHOOK_URL');
    if (!BITRIX24_WEBHOOK_URL) {
      throw new Error('BITRIX24_WEBHOOK_URL is not configured');
    }

    const { name, phone, area, contactMethod, packageName, style, propertyType, scope, total } = await req.json();

    if (!phone) {
      return new Response(
        JSON.stringify({ error: 'Phone is required' }),
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

<<<<<<< HEAD
    const parsed = RequestSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid input', refId }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { name, phone, area, contactMethod, packageName, style, propertyType, scope, total } = parsed.data;

    const totalNum = total !== undefined && total !== null && total !== '' ? Number(total) : null;
    const totalStr = totalNum !== null && Number.isFinite(totalNum)
      ? `${totalNum.toLocaleString('ru-RU')} ₽`
      : '';

=======
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
    const comment = [
      packageName ? `Пакет: ${packageName}` : '',
      style ? `Стиль: ${style}` : '',
      propertyType ? `Тип жилья: ${propertyType}` : '',
      scope ? `Объём работ: ${scope}` : '',
      area ? `Площадь: ${area} м²` : '',
<<<<<<< HEAD
      totalStr ? `Итого: ${totalStr}` : '',
=======
      total ? `Итого: ${Number(total).toLocaleString('ru-RU')} ₽` : '',
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
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
<<<<<<< HEAD
      console.error(`[${refId}] Bitrix24 error:`, data);
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to submit request. Please try again.', refId }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
=======
      console.error('Bitrix24 error:', data);
      throw new Error(`Bitrix24 API error: ${JSON.stringify(data)}`);
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
    }

    return new Response(
      JSON.stringify({ success: true, leadId: data.result }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
<<<<<<< HEAD
    console.error(`[${refId}] Error creating lead:`, error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to submit request. Please try again.', refId }),
=======
    console.error('Error creating lead:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: message }),
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
