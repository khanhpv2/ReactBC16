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
import AntD from "./pages/AntD/AntD";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import UserTemplate from "./template/UserTemplate/UserTemplate";
import AdminTemplate from "./template/AdminTemplate/AdminTemplate";
import HomeMobile from "./pages/Home/HomeMobile";

function App() {
  return (
    <BrowserRouter>
      {/* <HeaderHome /> */}
      <ModalHOC />
      <Switch>
        {/* <Route exact path={"/home"} render={(propsRoute)=>{ //propsRoute: history, location, match, ...
            return <div>
              <HeaderHome />
              <Home {...propsRoute} />
            </div>
        }} /> */}
        <AdminTemplate path='/admin/home' component={Home} />
        <HomeTemplate path='/home' component={Home} componentMobile={HomeMobile} />
        <UserTemplate exact path={"/login"} component={Login} />
        <UserTemplate exact path={"/register"} component={Register} />
        <HomeTemplate exact path={"/about"} component={About}  />
        <HomeTemplate exact path={"/contact"} component={Contact} />
        <HomeTemplate exact path={"/profile"} component={Profile} />
        <HomeTemplate exact path={"/detail/:postid"} component={Detail} />
        <HomeTemplate exact path={"/baitapform"} component={BaiTapFormDangKy} />
        <HomeTemplate exact path={"/lifecycle"} component={LifeCycle}/>
        <HomeTemplate exact path={"/usestate"} component={DemoUseState}/>
        <HomeTemplate exact path={"/useeffect"} component={DemoUseEffect}/>
        <HomeTemplate exact path={"/apircc"} component={ApiRcc}/>
        <HomeTemplate exact path={"/apirfc"} component={ApiRfc}/>
        <HomeTemplate exact path={"/usecallback"} component={DemoUseCallBack}/>
        <HomeTemplate exact path={"/usememo"} component={DemoUseMemo}/>
        <HomeTemplate exact path={"/useref"} component={DemoUseRef}/>
        <HomeTemplate exact path={"/useredux"} component={FakeBookApp}/>
        <HomeTemplate exact path={"/reduxapi"} component={ReduxApi}/>
        <HomeTemplate exact path={"/hoc"} component={DemoHOC}/>
        <HomeTemplate exact path={"/antd"} component={AntD}/>

        {/* trang mặc định luôn đặt ở cuối cùng */}
        <HomeTemplate exact path={"/"} component={Home} />
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
