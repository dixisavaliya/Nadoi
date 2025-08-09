'use client';

import MembershipHeroSection from "@/components/membership/MembershipHeroSection";
import MembershipBenefitsSection from "@/components/membership/MembershipBenefitsSection";
import MembershipTypesSection from "@/components/membership/MembershipTypesSection";
import MembershipComparisonSection from "@/components/membership/MembershipComparisonSection";
import MembershipTestimonialsSection from "@/components/membership/MembershipTestimonialsSection";

export default function Membership() {
    return (
        <>
            <MembershipHeroSection />
            <MembershipBenefitsSection />
            <MembershipTypesSection />
            <MembershipComparisonSection />
            <MembershipTestimonialsSection />
        </>
    );
}
