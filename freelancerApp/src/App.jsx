//TanStack
//یه ابزاری هست که شامل ریکت کوئری و اینا هست، یه ابزاری هست واسه مدیریت استیت ها
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import OwnerDashboard from "./pages/OwnerDashboard";

import Products from "./pages/Products";
import Product from "./pages/Product";
import UsersInformation from "./pages/UsersInformation";
import SingleUserinformation from "./pages/SingleUserinformation";

function App() {
    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Toaster />

                <Routes>
                    {/* <Route path="/auth" element={<Auth />} /> */}
                    {/*  <Route
                        path="/CompleteProfile"
                        element={<CompleteProfile />}
                    /> */}

                    <Route path="/owner" element={<AppLayout />}>
                        <Route
                            index
                            element={<Navigate to="dashboard" replace />}
                        />
                        <Route path="dashboard" element={<OwnerDashboard />} />
                        <Route path="products" element={<Products />} />
                        <Route
                            path="/owner/products/:id"
                            element={<Product />}
                        />
                        <Route
                            path="users-info"
                            element={<UsersInformation />}
                        />
                        <Route
                            path="/owner/users/:id"
                            element={<SingleUserinformation />}
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
