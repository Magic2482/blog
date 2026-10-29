import {Routes, Route} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HomePage from "./components/HomePage.jsx";
import PostDetailPage from "./components/PostDetailPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import PostEditorPage from "./components/PostEditorPage.jsx";
import DashboardPage from "./components/DashboardPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/posts/:postId" element={<PostDetailPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>

      {/* Защищённые маршруты */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/posts/new" element={<PostEditorPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Route>

      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );

}

export default App
