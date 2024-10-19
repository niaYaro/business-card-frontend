import { FC } from "react";
import { ErrorResponse, useRouteError } from "react-router-dom";

interface ErrorPageProps extends ErrorResponse {
  message: string;
  internal: boolean;
}

const ErrorPage: FC = () => {
  const error = useRouteError() as ErrorPageProps;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;