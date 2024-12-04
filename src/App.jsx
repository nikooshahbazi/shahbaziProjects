//TanStack
//یه ابزاری هست که شامل ریکت کوئری و اینا هست، یه ابزاری هست واسه مدیریت استیت ها
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import AppLayout from "./ui/AppLayout";
import OwnerDashboard from "./pages/OwnerDashboard";

import ProductsList from "./pages/Product";
import ProductsListTable from "./pages/Products";
import Products from "./pages/Products";
import Product from "./pages/Product";

function App() {
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Toaster />

                <Routes>
                    <Route path="/auth" element={<Auth />} />
                    <Route
                        path="/CompleteProfile"
                        element={<CompleteProfile />}
                    />

                    <Route path="/owner" element={<AppLayout />}>
                        <Route
                            index
                            element={<Navigate to="dashboard" replace />}
                        />
                        <Route path="dashboard" element={<OwnerDashboard />} />
                        <Route path="products" element={<Products />} />
                        <Route
                            path="products/:id"
                            element={<Product />}
                        />
                    </Route>
                </Routes>
            </QueryClientProvider>
        </>
    );
}

export default App;

//reactQuery includes => 2 customHooks =>
//useQeury => get Data
//useMutation => it`s mean <change>  => request => delete, post, put ...
