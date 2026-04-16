import { Box, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

const locations = [
  {
    title: "Ceremonia",
    name: "Parroquia Nuestra Señora de la Asunción",
    address: "Moratalla",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Parroquia+Nuestra+Señora+de+la+Asunción+Moratalla",
  },
  {
    title: "Convite",
    name: "Salones Cristi",
    address: "Caravaca de la Cruz",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Salones+Cristi+Caravaca",
  },
];

export const Location = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        my: { xs: 6, md: 10 },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Playfair Display",
          fontSize: { xs: "1.6rem", md: "2rem" },
          mb: 5,
        }}
      >
        Ubicación
      </Typography>

      {locations.map((loc, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              mb: 5,
            }}
          >
            {/* Título */}
            <Typography
              sx={{
                fontSize: "0.8rem",
                letterSpacing: "2px",
                color: "text.secondary",
                mb: 1,
              }}
            >
              {loc.title.toUpperCase()}
            </Typography>

            {/* Nombre */}
            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontSize: { xs: "1.4rem", md: "1.6rem" },
                mb: 1,
              }}
            >
              {loc.name}
            </Typography>

            {/* Dirección */}
            <Typography
              sx={{
                fontSize: "0.9rem",
                color: "text.secondary",
                mb: 2,
              }}
            >
              {loc.address}
            </Typography>

            {/* Botón */}
            <Button
              href={loc.mapsUrl}
              target="_blank"
              startIcon={<LocationOnIcon />}
              sx={{
                textTransform: "none",
                borderBottom: "1px solid #ccc",
                borderRadius: 0,
                px: 0,
                color: "text.primary",
              }}
            >
              Ver ubicación
            </Button>
          </Box>

          {/* Línea separadora (menos en el último) */}
          {index !== locations.length - 1 && (
            <Box
              sx={{
                width: "40px",
                height: "1px",
                backgroundColor: "#ddd",
                margin: "30px auto",
              }}
            />
          )}
        </motion.div>
      ))}
    </Box>
  );
};