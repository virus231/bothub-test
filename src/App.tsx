import { lazy, Suspense } from "react";

const NotificationPopup = lazy(() =>
  import("@/features/notifications").then((module) => ({
    default: module.NotificationPopup,
  }))
);

function App() {
  return (
    <div className="p-4">
      <div className="container mx-auto px-4">
        <div className="flex place-content-center">
          <Suspense
            fallback={
              <span className="text-neutral-700 text-lg font-medium">
                Loading...
              </span>
            }
          >
            <NotificationPopup />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
