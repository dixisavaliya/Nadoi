import ArticalSection from "@/components/common/ArticalSection";
import CTASection from "@/components/common/CTASection";
import FeatureSection from "@/components/common/FeatureSection";
import ServiceSection from "@/components/common/ServicesSection";

import BannerSection from "@/components/common/BannerSection";
import ContentSection from "@/components/common/ContentSection";
import JoinNadoiSection from "@/components/join-nadio/JoinNadoiSection ";


export default function JoinNadoi() {
    return (
        <>
            <BannerSection
                imageSrc="/images/banner-join.jpg"
                heading="Why join NADOI?"
                subHeading="NADOI has been the premier organization for dog
trainers for almost sixty years. There is no better place
to learn than from the folks that have been training
and instructing for decades."
                buttonText="BECOME A MEMBER"
                buttonLink="/membership"
            />

            <ContentSection
                title="What is NADOI?"
                description="The National Association of Dog Obedience Instructors was founded in 1965 with a goal of
        promoting humane and effective dog training. That goal remains the same today, and we
        are reaching out to the dog training community to ask them to join us in promoting the
        idea that skills and experience are the hallmarks of a dog trainer who can be both
        humane and effective. NADOI does not discriminate against or endorse any particular
        training tool, method or philosophy."
            />

            <JoinNadoiSection />

            <ServiceSection
                title="Benefits for NADOI members include:"
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
            <CTASection />
            <ArticalSection />
            <FeatureSection />
        </>
    );
}
