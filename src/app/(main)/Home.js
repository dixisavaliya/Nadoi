'use client';

import ArticalSection from "@/components/common/ArticalSection";
import CTASection from "@/components/common/CTASection";
import ServiceSection from "@/components/common/ServicesSection";
import FeatureSection from "@/components/common/FeatureSection";
import HeroSection from "@/components/home/HeroSection";
import MembershipSection from "@/components/home/MembershipSection";

export default function Home() {

    return (
        <>
            <HeroSection />
            <ServiceSection
                title="Why become a NADOI member?"
                services={[
                    {
                        image: "/images/icon-achievement.png",
                        title: "Recognition of Your Training Skills & Achievements",
                        description: "Only trainers with high levels of expertise and expereince can become NADOI-certified."
                    },
                    {
                        image: "/images/icon-idea.png",
                        title: "Marketing Tools and Business Support",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-gears.png",
                        title: "Access to Member Only Library",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-events.png",
                        title: "Exclusive Member Events and Webinars",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-professional.png",
                        title: "Professional Devlopment and Education",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-networking.png",
                        title: "Networking Opportunities",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-target.png",
                        title: "Advocacy and Resources",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    },
                    {
                        image: "/images/icon-coupon.png",
                        title: "Offers and Discounts from NADOI partners",
                        description: "Text about this membership benefit will go here. Text about this membership benefit will go here."
                    }
                ]}
            />
            <MembershipSection />
            <CTASection />
            <ArticalSection />
            <FeatureSection />
        </>
    );
}