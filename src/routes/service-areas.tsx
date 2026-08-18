import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/service-areas")({
  component: () => (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  ),
});
