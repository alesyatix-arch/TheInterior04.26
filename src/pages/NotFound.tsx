import { forwardRef } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
=======
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5

const NotFound = forwardRef<HTMLDivElement>((_, ref) => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div ref={ref} className="flex min-h-screen items-center justify-center bg-muted">
<<<<<<< HEAD
      <Helmet>
        <title>Страница не найдена — 404 | Твой Интерьер</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Страница не найдена</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Вернуться на главную
=======
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
        </a>
      </div>
    </div>
  );
});

NotFound.displayName = "NotFound";

export default NotFound;
