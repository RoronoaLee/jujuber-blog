import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './component/Nav/Nav'
import AppRouter from './appRouter';
import NavItem from './component/NavItem/NavItem'
import Header from './component/Header/Header';
import FlexWrapper from './component/FlexWrapper/FlexWrapper';
import {HashRouter} from 'react-router-dom';
import json from '../manifest';




ReactDOM.render(
  <HashRouter>
    <FlexWrapper>
      <Header siteName={json.title} siteDescription={json.description}>
        <Nav>
          <NavItem kind='home' pathName='/' itemName='首页'/>
          <NavItem kind='category' pathName='/category' itemName='归档'/>
          <NavItem kind='about' pathName='/about' itemName='关于'/>
        </Nav>
      </Header>
      <AppRouter/>
    </FlexWrapper>
  </HashRouter>
  , document.body);