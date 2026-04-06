export const formatDate = (isoDateString: string): string => {
  const date = new Date(isoDateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
};