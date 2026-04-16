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
import { ScrollArrow } from "../components/scrollArrow";

function Home() {

    const locationRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    return (
        <Layout>
            <Section>
                <Hero />
                <Countdown />
                <ScrollArrow targetRef={locationRef} />
            </Section>

            <Divider />

            <div ref={locationRef}>
                <Section>
                    <Location />
                    <ScrollArrow targetRef={timelineRef} />
                </Section>
            </div>

            <Divider />

            {/* TIMELINE */}
            <div ref={timelineRef}>
                <Section>
                    <Timeline />
                    <ScrollArrow targetRef={formRef} />
                </Section>
            </div>
            <Divider />

            {/* FORM */}
            <AnimatedSection>
                <div ref={formRef}>
                    <Section>
                        <Form />
                    </Section>
                </div>
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
