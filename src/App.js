import logo from "./logo.svg";
import "./App.css";
// Component app sẽ là nơi chưa toàn bộ giao diện của ứng dụng
import CardJSX from "./Component/DemoComponent/CardJSX";
import CardFunc from "./Component/DemoComponent/CardFunc";
import BaiTapLayout from "./Component/DemoComponent/BaiTapLayout/BaiTapLayout";
import Databinding from "./Databinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import StateDemo from "./StateDemo/StateDemo";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./Props/DemoProps/DemoProps";
import ProductList from "./ShoesShop/ProductList";
import DemoXemChiTiet from "./Props/DemoProps/DemoXemChiTiet/DemoXemChiTiet";
import BTGiohang from "./DemoRedux/BTGiohang/BTGiohang";
import BtGameXucXac from "./DemoRedux/BTGiohang/BTGameXucXac/BtGameXucXac";

// cấu hình router
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { Switch } from "react-router-dom";
import HeaderHome from "./Component/HeaderHome/HeaderHome";
import Profile from "./pages/Profile/Profile";
import Detail from "./pages/Detail/Detail";
import BaiTapFormDangKy from "./pages/BaiTapFormDangKy/BaiTapFormDangKy";
import LifeCycle from "./pages/LifeCycle/LifeCycle";
import DemoUseState from "./pages/Hooks/DemoUseState/DemoUseState";
import DemoUseEffect from "./pages/Hooks/DemoUseEffect/DemoUseEffect";
import ApiRcc from "./pages/Api/DemoApi/ApiRcc"
import ApiRfc from "./pages/Api/DemoApi/ApiRfc"
import DemoUseCallBack from "./pages/Hooks/DemoUseCallBack/DemoUseCallBack";
import DemoUseMemo from "./pages/Hooks/DemoUseMemo/DemoUseMemo";
import DemoUseRef from "./pages/Hooks/DemoUseRef/DemoUseRef";
import FakeBookApp from "./pages/Hooks/HookRedux/FakeBookApp";
import ReduxApi from "./pages/ReduxApi/ReduxApi";
import DemoHOC from "./pages/HOC/DemoHOC";
import ModalHOC from "./pages/HOC/ModalHOC";

function App() {
  return (
    <BrowserRouter>
      <HeaderHome />
      <ModalHOC />
      <Switch>
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/profile"} component={Profile} />
        <Route exact path={"/detail/:postid"} component={Detail} />
        <Route exact path={"/baitapform"} component={BaiTapFormDangKy} />
        <Route exact path={"/lifecycle"} component={LifeCycle}/>
        <Route exact path={"/usestate"} component={DemoUseState}/>
        <Route exact path={"/useeffect"} component={DemoUseEffect}/>
        <Route exact path={"/apircc"} component={ApiRcc}/>
        <Route exact path={"/apirfc"} component={ApiRfc}/>
        <Route exact path={"/usecallback"} component={DemoUseCallBack}/>
        <Route exact path={"/usememo"} component={DemoUseMemo}/>
        <Route exact path={"/useref"} component={DemoUseRef}/>
        <Route exact path={"/useredux"} component={FakeBookApp}/>
        <Route exact path={"/reduxapi"} component={ReduxApi}/>
        <Route exact path={"/hoc"} component={DemoHOC}/>

        {/* trang mặc định luôn đặt ở cuối cùng */}
        <Route exact path={"/"} component={Home} />
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
