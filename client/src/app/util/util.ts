export function getCookie(key: string) {
  const b = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}

export function curranctFormat(amount: number) {
  return (amount / 10).toFixed(2) + ' SEK';
}
