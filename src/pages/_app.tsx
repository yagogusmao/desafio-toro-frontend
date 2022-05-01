import type { AppProps } from "next/app";
import { _Snackbar } from "../contexts/snackbar";
import { _UserData } from "../contexts/userData";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <_UserData>
        <_Snackbar>
          <Component {...pageProps} />
        </_Snackbar>
      </_UserData>
    </>
  );
}

export default MyApp;
