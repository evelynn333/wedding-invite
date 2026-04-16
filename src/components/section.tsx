import { Box } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
}

export const Section = ({ children }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    px: 2,
                }}
            >
                {children}
            </Box>
        </motion.div>
    );
};
