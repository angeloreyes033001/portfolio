import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingPage from "./pages/Loading.page";
const Index = lazy(() => import("@/pages/Index.page"));

const App = () => {
  return (
    <>
      <Suspense fallback={<LoadingPage/>}>
        <Routes>
          <Route index element={<Index />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
