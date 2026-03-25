import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import StickyBanner from "./components/StickyBanner";
import CookieBanner from "./components/CookieBanner";

// Pages
import Home from "./pages/Home";
import BestVpnsUk from "./pages/BestVpnsUk";
import VpnReview from "./pages/VpnReview";
import StreamingVpn from "./pages/StreamingVpn";
import PrivateVpn from "./pages/PrivateVpn";
import VpnDeals from "./pages/VpnDeals";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import VpnComparison from "./pages/VpnComparison";
import VpnExplained from "./pages/VpnExplained";
import DoINeedAVpn from "./pages/DoINeedAVpn";
import FreeVpnUk from "./pages/FreeVpnUk";
import IsVpnLegalUk from "./pages/IsVpnLegalUk";
import VpnSetupGuide from "./pages/VpnSetupGuide";
import VpnForGaming from "./pages/VpnForGaming";
import VpnForTravel from "./pages/VpnForTravel";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteNav />
      <main className="flex-1 pb-20">
        {children}
      </main>
      <SiteFooter />
      <StickyBanner />
      <CookieBanner />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/best-vpns-uk" component={BestVpnsUk} />
      <Route path="/review/:slug" component={VpnReview} />
      <Route path="/streaming-vpn" component={StreamingVpn} />
      <Route path="/private-vpn" component={PrivateVpn} />
      <Route path="/vpn-for-gaming" component={VpnForGaming} />
      <Route path="/vpn-for-travel" component={VpnForTravel} />
      <Route path="/vpn-deals" component={VpnDeals} />
      <Route path="/articles" component={Articles} />
      <Route path="/articles/:slug" component={ArticleDetail} />
      <Route path="/vpn-comparison" component={VpnComparison} />
      <Route path="/vpn-explained" component={VpnExplained} />
      <Route path="/do-i-need-a-vpn" component={DoINeedAVpn} />
      <Route path="/free-vpn-uk" component={FreeVpnUk} />
      <Route path="/is-vpn-legal-uk" component={IsVpnLegalUk} />
      <Route path="/vpn-setup-guide" component={VpnSetupGuide} />
      <Route path="/about" component={About} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <ScrollToTop />
          <Layout>
            <Router />
          </Layout>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
