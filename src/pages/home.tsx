import { Layout } from "../components/layout";
import { Hero } from "../components/hero";
import { Countdown } from "../components/countdown";
import { Location } from "../components/location";
import { Section } from "../components/section";
import { Form } from "../components/form";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Timeline } from "../components/timeline";

function Home() {
    const nextSectionRef = useRef<HTMLDivElement>(null);

    return (
        <Layout>
            <Section>
                <Hero />
                <Countdown scrollRef={nextSectionRef} />
            </Section>

            <Divider />

            <div ref={nextSectionRef}>
                <AnimatedSection>
                    <Section>
                        <Location />
                    </Section>
                </AnimatedSection>
            </div>

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

export default Home;

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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
