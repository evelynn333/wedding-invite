import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Guest } from "../types/guest";
import { getUser, logout } from "../services/authService";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import DownloadIcon from "@mui/icons-material/Download";
import LogoutIcon from "@mui/icons-material/Logout";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import { Menu, MenuItem } from "@mui/material";

export const Admin = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [guests, setGuests] = useState<Guest[]>([]);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [downloading, setDownloading] = useState(false);

    const normalizeText = (text: string) =>
        text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

    const filteredGuests = guests.filter((g) =>
        normalizeText(`${g.name} ${g.surname}`).includes(normalizeText(search)),
    );

    const fetchGuests = async () => {
        const { data } = await supabase.from("guests").select("*");

        if (data) setGuests(data);
    };

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    const exportPDF = () => {

        setDownloading(true);

        const doc = new jsPDF();

        let y = 30;

        // 💎 TÍTULO
        doc.setFont("times", "normal");
        doc.setFontSize(20);
        doc.text("Maricarmen & Juanfran", 105, y, { align: "center" });

        y += 10;

        // ✨ SUBTÍTULO
        doc.setFontSize(11);
        doc.text("Lista de invitados", 105, y, { align: "center" });

        y += 8;

        // 🌿 LÍNEA DECORATIVA
        doc.setDrawColor(180);
        doc.line(70, y, 140, y);

        y += 12;

        // 🧩 CABECERA
        doc.setFontSize(10);
        doc.setTextColor(120);

        const colX = {
            name: 20,
            status: 100,
            companion: 140,
            allergies: 170,
        };

        doc.text("Nombre", colX.name, y);
        doc.text("Estado", colX.status, y);
        doc.text("Acomp.", colX.companion, y);
        doc.text("Alergias", colX.allergies, y);

        y += 4;

        // línea header
        doc.setDrawColor(200);
        doc.line(20, y, 190, y);

        y += 8;

        // 📝 FILAS
        doc.setTextColor(0);

        guests.forEach((g) => {
            const name = `${g.name} ${g.surname}`;
            const status = g.attending ? "Asiste" : "No";
            const companion = g.has_companion ? "Sí" : "—";
            const allergies = g.has_allergies
                ? g.dietary_restrictions
                : "—";

            doc.text(name, colX.name, y);

            doc.setTextColor(g.attending ? 40 : 120);
            doc.text(status, colX.status, y);

            doc.setTextColor(0);
            doc.text(companion, colX.companion, y);
            doc.text(allergies, colX.allergies, y);

            y += 8;

            // 📄 salto página
            if (y > 270) {
                doc.addPage();
                y = 30;
            }
        });

        doc.save("invitados.pdf");
       
        setTimeout(() => {
            setDownloading(false);
        }, 1000);
    };

    const exportExcel = () => {
        const formatted = guests.map((g) => ({
            Nombre: g.name,
            Apellidos: g.surname || "",
            Asiste: g.attending ? "Sí" : "No",
            Acompañante: g.has_companion ? "Sí" : "No",
            Alergias: g.has_allergies ? g.dietary_restrictions : "",
        }));
        const ws = XLSX.utils.json_to_sheet(formatted);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Invitados");
        XLSX.writeFile(wb, "invitados.xlsx");
    };

    const openMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const closeMenu = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const checkUser = async () => {
            const user = await getUser();
            if (!user) navigate("/login");
        };

        checkUser();
        fetchGuests();
    }, []);

    const Stat = ({
        label,
        value,
        highlight,
    }: {
        label: string;
        value: number;
        highlight?: boolean;
    }) => (
        <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
                {label}
            </Typography>

            <Typography
                sx={{
                    fontSize: "1.6rem",
                    color: highlight ? "primary.main" : "text.primary",
                }}
            >
                {value}
            </Typography>
        </Box>
    );

    return (
        <Box
            sx={{
                px: { xs: 2, md: 4 },
                py: 4,
                maxWidth: "700px",
                mx: "auto",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 4,
                }}
            >
                {/* Export */}
                <>
                    <IconButton onClick={openMenu}>
                        <DownloadIcon
                            sx={{
                                cursor: "pointer",
                                color: downloading ? "primary.main" : "text.secondary",
                                opacity: downloading ? 0.5 : 1,
                            }}
                        />
                    </IconButton>

                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
                        <MenuItem
                            onClick={() => {
                                exportExcel();
                                closeMenu();
                            }}
                        >
                            Excel
                        </MenuItem>

                        <MenuItem
                            onClick={() => {
                                exportPDF();
                                closeMenu();
                            }}
                        >
                            PDF
                        </MenuItem>
                    </Menu>
                </>

                {/* Título */}
                <Typography
                    sx={{
                        fontFamily: "Playfair Display",
                        fontSize: { xs: "1.8rem", md: "2.2rem" },
                    }}
                >
                    Invitados
                </Typography>

                {/* Logout */}
                <LogoutIcon
                    onClick={handleLogout}
                    sx={{
                        cursor: "pointer",
                        color: "text.secondary",
                        "&:hover": { color: "primary.main" },
                    }}
                />
            </Box>
            {/* STATS */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    mb: 5,
                }}
            >
                <Stat label="Total" value={guests.length} />
                <Stat
                    label="Asisten"
                    value={guests.filter((g) => g.attending).length}
                    highlight
                />
                <Stat
                    label="No asisten"
                    value={guests.filter((g) => !g.attending).length}
                />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "left",
                    mb: 4,
                }}
            >
                <TextField
                    variant="standard"
                    placeholder="Buscar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{
                        width: "160px",
                        "& .MuiInputBase-input": {
                            textAlign: "left",
                            fontSize: "0.85rem",
                        },
                        "& .MuiInput-underline:before": {
                            borderBottomColor: "divider",
                        },
                        "& .MuiInput-underline:hover:before": {
                            borderBottomColor: "primary.main",
                        },
                    }}
                />
            </Box>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Box
                    sx={{
                        mt: 4,
                        maxWidth: "500px",
                        mx: "auto",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            pb: 1,
                            borderBottom: "1px solid",
                            borderColor: "divider",
                            fontSize: "0.8rem",
                            color: "text.secondary",
                        }}
                    >
                        <Typography sx={{ fontWeight: 600, textAlign: "center" }}>
                            Nombre
                        </Typography>
                        <Typography sx={{ fontWeight: 600, textAlign: "center" }}>
                            Estado
                        </Typography>
                    </Box>

                    {filteredGuests.map((g, index) => (
                        <motion.div
                            key={g.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    py: 1.5,
                                    borderBottom: "1px solid",
                                    borderColor: "divider",
                                }}
                            >
                                <Typography sx={{ textAlign: "center" }}>
                                    {g.name} {g.surname}
                                </Typography>

                                <Typography
                                    sx={{
                                        textAlign: "center",
                                        color: g.attending
                                            ? "primary.main"
                                            : "text.secondary",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    {g.attending ? "Asiste" : "No asiste"}
                                </Typography>
                            </Box>
                        </motion.div>
                    ))}
                </Box>
            </motion.div>
        </Box>
    );
};
