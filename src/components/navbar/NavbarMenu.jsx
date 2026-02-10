import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { useRouter } from 'next/router'; // Import useRouter from Next.js

const CustomMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    disableScrollLock
    keepMounted
    {...props}
  />
))({
  '& .MuiPaper-root': {
    background: '#01B1A8 0% 0% no-repeat padding-box',
    borderRadius: '5px',
    marginTop: '10px',
    color: '#fff',
    '& .MuiMenu-list': {
      margin: '0 20px',
      background: '#01b1a8',
      '&:hover': { background: 'transparent' },
    },
  },
});

const NavbarMenu = ({ anchorEl, open, onClose, menuItems }) => {
  const router = useRouter();

  const handleMenuItemClick = (href) => {
    router.push(href);
    onClose();
  };

  return (
    <CustomMenu id="menu" anchorEl={anchorEl} open={open} onClose={onClose}>
      {menuItems.map((item) => (
        <MenuItem
          key={item.label}
          onClick={() => handleMenuItemClick(item.href)}
          sx={{
            background: '#01B1A8',
            fontWeight: 600,
            fontSize: '18px',
            color: '#fff',
            padding: '10px 0 10px 0',
            gap: '20px',
            '&:hover': { paddingLeft: '10px', background: '#01b1a8' },
          }}
        >
          {item.label}
        </MenuItem>
      ))}
    </CustomMenu>
  );
};

export default NavbarMenu;
