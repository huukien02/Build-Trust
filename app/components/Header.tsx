// components/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { label: "Dự Án", href: "/projects" },
  { label: "Về chúng tôi", href: "/about" },
  { label: "Tin tức & Sự kiện", href: "/news" },
  // { label: "Tuyển dụng", href: "/careers" },
  { label: "Liên hệ", href: "/contact" },
];

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/">
          <Box
            component="img"
            src="/logo.png" // đường dẫn từ thư mục public
            alt="Logo"
            sx={{
              width: 80, // điều chỉnh chiều rộng
              height: "auto", // tự động giữ tỉ lệ
              cursor: "pointer",
              padding: "15px 15px",
            }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <button
                className="
          px-4 py-2  cursor-pointer rounded-[10px]
          transition-shadow duration-300
          hover:shadow-[2px_2px_0_0_white]
        "
              >
                {item.label}
              </button>
            </Link>
          ))}
        </div>
        {/* Mobile menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                backgroundColor: "#1f2937", // màu nền, ví dụ xám đậm
                border: "1px solid #ffffff", // border trắng
                borderRadius: 2, // bo góc
                minWidth: 140,
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", // optional shadow nhẹ
              },
            }}
            MenuListProps={{
              sx: {
                textAlign: "right",
                paddingRight: "8px",
              },
            }}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={handleClose}
                sx={{
                  backgroundColor: "transparent",
                  justifyContent: "flex-end",
                  color: "white",
                }}
              >
                <Link href={item.href}>{item.label}</Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
