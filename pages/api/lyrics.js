export default function handler(_req, res) {
  res.setHeader('Allow', 'GET');
  return res.status(501).json({
    available: false,
    message: 'A busca de letras ainda é um placeholder: nenhuma API de letras foi conectada.',
  });
}
