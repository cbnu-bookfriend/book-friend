import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import BookListComponent from "../book/BookListComponent";
import BookDetailComponent from "../book/BookDetailComponent";
import BookPostComponent from "../book/BookPostComponent";
import LikeBookListComponent from "../list/LikeBookListComponent";
import AskListComponent from "../list/AskListComponent";
import borrowedlist from "../list/borrowedlist";
import borrowlist from "../list/borrowlist";
import MyBookListComponent from "../list/MyBookListComponent";
import MainComponent from "../main/MainComponent";
import MypageComponent from "../mypage/MypageComponent";
import check from "../mypage/check";
import EditUserComponent from "../user/EditUserComponent";
import AlarmComponent from "../mypage/AlarmComponent";
import ReportUserComponent from "../mypage/ReportUserComponent";
import PointRecordListComponent from "../list/PointRecordListComponent";
import AddUserComponent from '../user/AddUserComponent';
import LoginComponent from '../user/LoginComponent';

const AppRouter = () => {
   return(
     <div style={style}>
       <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainComponent} />
            <Route path="/main" component={MainComponent} />
            <Route path="/books" component={BookListComponent} />
            <Route path="/book-detail" component={BookDetailComponent} />
            <Route path="/book-post" component={BookPostComponent} />
            <Route path="/ask-list" component={AskListComponent} />
            <Route path="/borrowed-list" component={borrowedlist} />
            <Route path="/borrow-list" component={borrowlist} />
            <Route path="/mypage" component={MypageComponent} />
            <Route path="/check" component={check} />
            <Route path="/likelist" component={LikeBookListComponent} />
            <Route path="/mybooklist" component={MyBookListComponent} />
            <Route path="/edituser" component={EditUserComponent} />
            <Route path="/alarm" component={AlarmComponent} />
            <Route path="/reportuser" component={ReportUserComponent} />
            <Route path="/point" component={PointRecordListComponent} />
            <Route path="/signup" component={AddUserComponent} />
            <Route path="/login" component={LoginComponent} />
          </Switch>
       </BrowserRouter>
     </div>
   );
}

const style = {
  marginTop: '20px'
}

export default AppRouter;