import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";
import FirebaseProvider from "./provider/firebase";

import Router from "./router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Theme
      accentColor="crimson"
      grayColor="sand"
      radius="large"
      scaling="95%"
      appearance="light"
    > */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FirebaseProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </FirebaseProvider>
      </PersistGate>
    </Provider>

    {/* </Theme> */}
  </StrictMode>
);
