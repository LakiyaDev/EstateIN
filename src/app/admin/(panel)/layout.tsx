import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background lg:flex">
      <AdminSidebar />
      <div className="flex-1 lg:pl-64">
        <div className="p-6 lg:p-8">{children}</div>
      </div>
    </div>
  );
}
