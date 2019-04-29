import React from "react";
import loadable from "loadable-components";
import Loading from "../components/Loading";

export const Home = loadable(() => import("../containers/Home"), {
  LoadingComponent: Loading
});

export const Courses = loadable(() => import("../containers/Courses"), {
  LoadingComponent: Loading
});

export const WhoWetrain = loadable(() => import("../containers/WhoWetrain"), {
  LoadingComponent: Loading
});

export const About = loadable(() => import("../containers/About"), {
  LoadingComponent: Loading
});

export const Contact = loadable(() => import("../containers/Contact"), {
  LoadingComponent: Loading
});

export const Header = loadable(() => import("../components/Header"), {
  LoadingComponent: Loading
});

export const Course = loadable(() => import("../containers/Course"), {
  LoadingComponent: Loading
});

export const Model = loadable(() => import("../containers/Model"), {
  LoadingComponent: Loading
});

export const Footer = loadable(() => import("../components/Footer"), {
  LoadingComponent: Loading
});

export const ModelForm = loadable(() => import("../components/ModelForm"), {
  LoadingComponent: Loading
});

export const Blog = loadable(() => import("../containers/Blog"), {
  LoadingComponent: Loading
});
export const Article = loadable(() => import("../containers/Article"), {
  LoadingComponent: Loading
});

export const Admin = loadable(() => import("../containers/Admin"), {
  LoadingComponent: Loading
});

export const Testimonials = loadable(
  () => import("../containers/Testimonials"),
  {
    LoadingComponent: Loading
  }
);
export const BookACourseForm = loadable(
  () => import("../components/BookACourseForm"),
  {
    LoadingComponent: Loading
  }
);

export const TermsAndConditions = loadable(
  () => import("../components/TermsAndConditions"),
  {
    LoadingComponent: Loading
  }
);

export const PrivacyPolicy = loadable(
  () => import("../components/PrivacyPolicy"),
  {
    LoadingComponent: Loading
  }
);
