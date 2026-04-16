import { Box, Container } from "@mui/material";

interface Props {
    children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "background.default",
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
                backgroundSize: "18px 18px",
            }}
        >
            <Container
                maxWidth="sm"
                sx={{
                    py: 0,
                }}
            >
                {children}
            </Container>
        </Box>
    );
};
