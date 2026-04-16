import { Layout } from "../components/layout";
import { Hero } from "../components/hero";
import { Countdown } from "../components/countdown";
import { Location } from "../components/location";
import { Section } from "../components/section";
import { Timeline } from "../components/timeline";
import { Form } from "../components/form";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

function App() {
    return (
        <Layout>
            {/* HERO */}
            <Section>
                <Hero />
                <Countdown />
            </Section>

            {/* SEPARADOR */}
            <Divider />

            {/* LOCATION */}
            <AnimatedSection>
                <Section>
                    <Location />
                </Section>
            </AnimatedSection>

            <Divider />

            {/* TIMELINE */}
            <AnimatedSection>
                <Section>
                    <Timeline />
                </Section>
            </AnimatedSection>

            <Divider />

            {/* FORM */}
            <AnimatedSection>
                <Section>
                    <Form />
                </Section>
            </AnimatedSection>
        </Layout>
    );
}

export default App;

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
    >
        {children}
    </motion.div>
);

// 🧩 DIVIDER ELEGANTE
const Divider = () => (
    <Box
        sx={{
            width: "40px",
            height: "1px",
            backgroundColor: "divider",
            mx: "auto",
            my: 6,
        }}
    />
);
