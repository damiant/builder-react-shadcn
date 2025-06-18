import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  Home,
  Activity,
  BarChart,
  Folder,
  Users2,
  Circle,
} from "lucide-react";

const navigationItems = [
  {
    title: "Dashboard",
    icon: Home,
    isActive: true,
  },
  {
    title: "Lifecycle",
    icon: Activity,
    isActive: false,
  },
  {
    title: "Analytics",
    icon: BarChart,
    isActive: false,
  },
  {
    title: "Projects",
    icon: Folder,
    isActive: false,
  },
  {
    title: "Team",
    icon: Users2,
    isActive: false,
  },
];

const metricsData = [
  {
    title: "Total Revenue",
    value: "$1,250.00",
    description: "Tracking all this month",
    trend: "+14.5%",
    icon: DollarSign,
  },
  {
    title: "New Customers",
    value: "1,234",
    description: "Down 20% this period",
    trend: "-10%",
    icon: Users,
  },
  {
    title: "Active Accounts",
    value: "45,678",
    description: "Strong user retention",
    trend: "+14.5%",
    icon: Activity,
  },
  {
    title: "Growth Rate",
    value: "4.5%",
    description: "Steady performance increase",
    trend: "+4.4%",
    icon: TrendingUp,
  },
];

const visitorsData = [
  {
    header: "Cover page",
    sectionType: "Cover page",
    status: "In Progress",
    target: "36",
    users: "5",
    reviewer: "Edith Lake",
  },
  {
    header: "Table of contents",
    sectionType: "Table of contents",
    status: "Done",
    target: "29",
    users: "24",
    reviewer: "Edith Lake",
  },
  {
    header: "Executive summary",
    sectionType: "Revenue",
    status: "Done",
    target: "10",
    users: "13",
    reviewer: "Edith Lake",
  },
];

function App() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="border-r">
          <SidebarHeader className="border-b p-4">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <BarChart3 className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 text-sm">
                <span className="font-semibold">Acme Inc.</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        isActive={item.isActive}
                        className="w-full justify-start"
                      >
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold">Documents</span>
            </div>
          </header>

          <main className="flex-1 space-y-6 p-6">
            {/* Metrics Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {metricsData.map((metric, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {metric.title}
                    </CardTitle>
                    <metric.icon className="size-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>{metric.description}</span>
                      <span
                        className={
                          metric.trend.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {metric.trend}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Chart Section */}
            <Card>
              <CardHeader>
                <CardTitle>Total Visitors</CardTitle>
                <CardDescription>Total for the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full rounded-md border bg-muted/50 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <BarChart3 className="size-12 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Chart visualization would go here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visitors Table */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Visitors</CardTitle>
                    <CardDescription>
                      Overview of recent document activities
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">Last 3 months</Badge>
                    <Badge variant="outline">Last 30 days</Badge>
                    <Badge variant="outline">Last 1 week</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Header</TableHead>
                      <TableHead>Section Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Target</TableHead>
                      <TableHead>Users</TableHead>
                      <TableHead>Reviewer</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {visitorsData.map((visitor, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {visitor.header}
                        </TableCell>
                        <TableCell>{visitor.sectionType}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Circle
                              className={`size-2 fill-current ${
                                visitor.status === "Done"
                                  ? "text-green-500"
                                  : "text-yellow-500"
                              }`}
                            />
                            {visitor.status}
                          </div>
                        </TableCell>
                        <TableCell>{visitor.target}</TableCell>
                        <TableCell>{visitor.users}</TableCell>
                        <TableCell>{visitor.reviewer}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default App;
