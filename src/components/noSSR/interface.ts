export interface NoSSRProps {
  children: React.ReactNode;
  defer?: boolean;
  fallback?: React.ReactNode;
}
