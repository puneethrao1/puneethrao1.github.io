import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, BarChart3, Database, Zap, Shield, Users, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SalesforceDemo() {
  const features = [
    {
      icon: Database,
      title: "Complete Data Model",
      description: "Configured Leads, Accounts, Contacts, Opportunities, Products, Cases, and Tasks with realistic sample data."
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "20+ flows for task creation, email alerts, and stage-based automation across the sales lifecycle."
    },
    {
      icon: BarChart3,
      title: "Sales Performance Dashboard",
      description: "Custom Lightning dashboard tracking pipeline, win/loss, lead status, and open pipeline value."
    },
    {
      icon: Shield,
      title: "Data Quality Controls",
      description: "Custom fields, validation rules, and layouts to keep pipeline data consistent and decision-ready."
    }
  ];

  const objects = [
    { name: "Leads", description: "Prospect tracking across stages (New → Contacted → Nurturing → Qualified → Unqualified)." },
    { name: "Accounts", description: "Company records for customers and prospects across tech and services industries." },
    { name: "Contacts", description: "Decision-makers and stakeholders linked to accounts, opportunities, and cases." },
    { name: "Opportunities", description: "End-to-end sales pipeline from Prospecting to Closed Won/Lost." },
    { name: "Products", description: "Service offerings like CRM Training, Cloud Migration, and Security Upgrade bundles." },
    { name: "Cases", description: "Customer support tickets connected to accounts and contacts for 360° view." }
  ];

  const dashboardComponents = [
    "Opportunities by Account – bar chart comparing deal counts by customer.",
    "Pipeline by Stage – bar chart showing volume at each pipeline stage.",
    "Win/Loss Report – donut chart splitting Closed Won vs Closed Lost.",
    "Open Pipeline – bar chart by amount bucket with detailed opportunity table.",
    "My Leads – bar chart of lead status distribution (New, Contacted, Nurturing, Qualified, Unqualified)."
  ];

  const customFields = [
    "Budget (Currency) – captures deal value discussed with the customer.",
    "Main Competitor (Text) – tracks competitive landscape for each deal.",
    "Decision Maker (Text) – identifies primary stakeholder on the customer side.",
    "Days in Current Stage (Number) – helps highlight stalled opportunities.",
    "Deal Priority (Picklist: High / Medium / Low) – focuses attention on key deals."
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <a
            href="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-4">
              <img
                src="/salesforce-screenshots/logo.png"
                alt="Puneeth Corp logo"
                className="h-10 mb-4"
              />
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
                Puneeth Corp Sales CRM
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl">
              A full Salesforce Sales Cloud implementation built in a Developer Edition org, designed to manage the
              end-to-end sales cycle – from leads and accounts to opportunities, products, cases, and executive-ready dashboards.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Salesforce Sales Cloud</Badge>
              <Badge variant="secondary">CRM Administration</Badge>
              <Badge variant="secondary">Process Automation</Badge>
              <Badge variant="secondary">Reporting & Dashboards</Badge>
              <Badge variant="secondary">Business Process Design</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <Card key={i} className="bg-card border-border hover:border-primary/60 transition-colors">
                  <CardHeader>
                    <f.icon className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{f.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Sales Performance Dashboard</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Custom Lightning dashboard giving sales leaders a real-time view of pipeline health, lead quality,
              open deals, and team activity.
            </p>

            <div className="rounded-lg overflow-hidden border border-border shadow-lg mb-8">
              <img
                src="/salesforce-screenshots/Dashbaord.png"
                alt="Sales Performance Dashboard"
                className="w-full"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Dashboard Components
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {dashboardComponents.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Custom Opportunity Fields
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {customFields.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                    Validation rules enforce a minimum deal size threshold so low-value opportunities do not clutter reporting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core objects */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Core CRM Objects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {objects.map((obj, i) => (
                <Card key={i} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{obj.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{obj.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Leads / Opportunities screenshots */}
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold mb-3">Lead Management</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Lead list views and reports track where each prospect sits in the funnel and which leads need follow-up.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <img src="/salesforce-screenshots/Leads.png" alt="Leads list" className="rounded-lg border border-border shadow-md" />
                  <img src="/salesforce-screenshots/Screenshot 2026-01-05 at 16.21.26.png" alt="Lead status report" className="rounded-lg border border-border shadow-md" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Opportunity Pipeline</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Pipeline reports show open pipeline by amount and by stage, helping prioritize which deals to focus on next.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <img src="/salesforce-screenshots/Screenshot 2026-01-05 at 16.20.27.png" alt="Open pipeline report" className="rounded-lg border border-border shadow-md" />
                  <img src="/salesforce-screenshots/Screenshot 2026-01-05 at 16.20.44.png" alt="Pipeline by stage report" className="rounded-lg border border-border shadow-md" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Accounts & Contacts</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Every customer has a 360° view – related contacts, opportunities, cases, and tasks are all visible on a single page.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <img src="/salesforce-screenshots/Accounts.png" alt="Accounts list" className="rounded-lg border border-border shadow-md" />
                  <img src="/salesforce-screenshots/Contacts.png" alt="Contacts list" className="rounded-lg border border-border shadow-md" />
                  <img src="/salesforce-screenshots/accounts eg.png" alt="Account detail" className="rounded-lg border border-border shadow-md" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Products & Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Product records store sellable services like CRM Training, Cloud Migration, and Security Upgrade bundles.
                </p>
                <img src="/salesforce-screenshots/Products.png" alt="Products" className="rounded-lg border border-border shadow-md" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Automation with Flows</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Flows handle repetitive admin work like creating follow-up tasks, updating stages, and sending notifications when key events occur.
                </p>
                <img src="/salesforce-screenshots/Flows.png" alt="Flows" className="rounded-lg border border-border shadow-md" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Skills Demonstrated</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Administration & Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5" /> Custom fields, layouts, and validation rules.
                    </li>
                    <li className="flex text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5" /> Object relationships between leads, accounts, contacts, opportunities, products, and cases.
                    </li>
                    <li className="flex text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5" /> Mobile-friendly page layouts for sales teams.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Automation & Process Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5" /> Record-triggered flows for stage changes and follow-up tasks.
                    </li>
                    <li className="flex text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5" /> Screen flows to support guided data entry for sales reps.
                    </li>
                    <li className="flex text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5" /> Business logic aligned with realistic B2B sales scenarios.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
