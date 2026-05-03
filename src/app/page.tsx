"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="floatingGradient"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Coaching",
          id: "#coaching",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Erica Runs"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "downward-rays-animated-grid",
      }}
      logoText="Erica Running Coaching"
      description="Custom 1:1 training plans designed to help you smash your personal records and build sustainable running habits."
      buttons={[
        {
          text: "Start Coaching",
          href: "#contact",
        },
        {
          text: "See Plans",
          href: "#coaching",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-athletic-man-jumping_23-2148747399.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Meet Your Coach",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/portrait-positivity-girl-smiling-camera-posing-with-crossed-arms-gym_231208-4660.jpg",
          alt: "Erica the Coach",
        },
      ]}
    />
  </div>

  <div id="coaching" data-section="coaching">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Monthly Custom Plan",
          price: "$150/mo",
          imageSrc: "http://img.b2bpic.net/free-photo/physical-activity-stats-around-person_23-2150163353.jpg",
        },
        {
          id: "p2",
          name: "1:1 Coaching Basic",
          price: "$250/mo",
          imageSrc: "http://img.b2bpic.net/free-photo/this-track-is-best-jogging_329181-4378.jpg",
        },
        {
          id: "p3",
          name: "Marathon Prep Intensive",
          price: "$400/mo",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-fit-people-training-outdoors_52683-136415.jpg",
        },
      ]}
      title="Coaching Programs"
      description="Tailored training solutions for every level of athlete."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Erica's coaching changed my perspective on running. I've crushed two PRs in just three months of training!"
      rating={5}
      author="Sarah Miller"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/happy-man-celebrating-trail-victory_23-2148482692.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-male-dark-skinned-runner-with-beautiful-fit-body-warming-up-his-muscles-before-strength-training-cardio-workout_176420-19883.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-man-practicing-interval-workout-stairs_158595-5901.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/full-shot-fit-woman-running-outdoors_23-2149436738.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/black-white-portrait-athlete-participating-olympic-championship-sports_23-2151500657.jpg",
          alt: "Client 5",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "200+",
          description: "Athletes Trained",
        },
        {
          id: "m2",
          value: "150+",
          description: "Personal Bests",
        },
        {
          id: "m3",
          value: "50+",
          description: "Marathons Completed",
        },
      ]}
      title="Proven Results"
      description="Evidence-based coaching that delivers consistent results for every athlete."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How do you deliver plans?",
          content: "All plans are delivered through TrainingPeaks with weekly check-in emails.",
        },
        {
          id: "f2",
          title: "Do I need experience?",
          content: "Not at all, I work with everyone from absolute beginners to advanced marathoners.",
        },
        {
          id: "f3",
          title: "Can I cancel anytime?",
          content: "Yes, our coaching agreements are month-to-month.",
        },
      ]}
      title="Common Questions"
      description="Get all your answers about 1:1 online coaching."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Ready to start?"
      title="Ready to reach your goals?"
      description="Send a message and let's discuss your running journey and training needs."
      buttons={[
        {
          text: "Contact Erica",
          href: "#",
        },
      ]}
      buttonAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Erica Runs"
      copyrightText="© 2025 Erica Running Coaching. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
