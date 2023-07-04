import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/AuthAction';
import { useNavigate } from 'react-router-dom';
import { BiLogInCircle } from 'react-icons/bi';



const Nav = styled.div`
  background: black;
  height: 80px;
  text-decoration:none;
  display: flex;
  justify-content: flex-start;
  
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background:black;
  color:blue;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout);
    }

    const { isAuthenticated, user } = useSelector(state => state.AuthState);
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isAuthenticated){
            navigate("/")
        }
    },[logoutHandler])
    return (
        <>
            <IconContext.Provider value={{ color: 'green', textdecoration: 'none' }}>
                <Nav>
                    <NavIcon to='#'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon> <h3 style={{ marginLeft: "610px", color: "white" }}>Samudhrika Lakshana</h3>

                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}
                        <button onClick={logoutHandler} style={{
        display: 'flex',
        alignItems: 'center',
        background: '#414757',
        color: '#e1e9fc',
        border: 'none',
        borderRadius: '4px',
        padding: '30px',
        fontSize: '18px',
        cursor: 'pointer',
        height: '60px',
        width: '100%',
        justifycontent: 'space-between',
        
        
      }}><BiLogInCircle style={{ marginRight: '8px' }} />Log Out</button>
                    </SidebarWrap>

                </SidebarNav>

            </IconContext.Provider>
        </>
    );
};

export default Sidebar;