/** @format */

import React, { useContext } from "react";
import { useTheme, Box, IconButton, InputBase } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
const TopBar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuOpen = () => {
		setIsOpen(true);
	};
	const handleMenuClose = () => {
		setIsOpen(false);
	};
	return (
		<Box display="flex" justifyContent="space-between" p={2}>
			{/* SEARCH BAR */}
			<Box
				display="flex"
				backgroundColor={colors.primary[400]}
				borderRadius="3px">
				<InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
				{/* ----> ADD SEARCH FUNCTIONALITY */}
				<IconButton type="button" sx={{ p: 1 }}>
					<SearchIcon />
				</IconButton>
			</Box>

			{/* ICONS */}
			<Box display="flex">
				{/* TO-DO */}
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === "dark" ? (
						<DarkModeOutlinedIcon />
					) : (
						<LightModeOutlinedIcon />
					)}
				</IconButton>
				<IconButton>
					<NotificationsOutlinedIcon />
				</IconButton>
				<IconButton>
					<SettingsOutlinedIcon />
				</IconButton>
				<IconButton>
					<PersonOutlinedIcon onClick={handleMenuOpen} />
					{isOpen && (
						<div>
							<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
							<MenuItem onClick={handleMenuClose}>Settings</MenuItem>
							<MenuItem onClick={handleMenuClose}>Logout</MenuItem>
						</div>
					)}
				</IconButton>
			</Box>
		</Box>
	);
};

export default TopBar;
