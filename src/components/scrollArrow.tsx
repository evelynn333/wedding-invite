import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { smoothScrollTo } from "../utils/scroll";


interface Props {
    targetRef: React.RefObject<HTMLDivElement>;
}

export const ScrollArrow = ({ targetRef }: Props) => {
    const handleClick = () => {
        const target = targetRef.current;
        if (!target) return;

        const y = target.getBoundingClientRect().top + window.scrollY;

        smoothScrollTo(y - 20, 1700); 
    };

    return (
        <motion.div
            onClick={handleClick}
            style={{ cursor: "pointer" }}
            animate={{ y: [0, 6, 0], opacity: [0.6, 1, 0.6] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <KeyboardArrowDownIcon
                    sx={{
                        fontSize: 26,
                        color: "text.secondary",
                    }}
                />
            </Box>
        </motion.div>
    );
};