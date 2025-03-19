Calculadora de Impostos - ICMS e ISS
Este projeto é uma Calculadora de Impostos desenvolvida em PHP que permite calcular o valor de impostos como ICMS (Imposto sobre Circulação de Mercadorias e Serviços) e ISS (Imposto Sobre Serviços), com base em um valor de compra fornecido pelo usuário. O sistema calcula os impostos e exibe o valor total com a adição do imposto.

Funcionalidades
Cálculo de ICMS: O projeto calcula o imposto ICMS com base em uma alíquota padrão de 18%, que pode ser alterada conforme necessário.
Cálculo de ISS: O ISS é calculado com base em uma alíquota padrão de 5%, podendo ser ajustado.
Interface simples e intuitiva: O projeto oferece um formulário simples onde o usuário insere o valor de compra e escolhe qual imposto deseja calcular (ICMS ou ISS).
Cálculos automáticos: Com os valores fornecidos, o sistema calcula automaticamente os valores do imposto e o total a ser pago.
Tecnologias Utilizadas
PHP: Para o backend e cálculos dos impostos.
HTML: Para criar o formulário de entrada de dados.
CSS: (Opcional) Pode ser utilizado para melhorar o design da interface.
cURL (opcional): Caso você deseje integrar a API do governo ou de estados para consultar as alíquotas de ICMS e ISS.
Como Usar
Clone este repositório ou faça o download dos arquivos:

vscode ou bash
Copiar código
git clone https://github.com/seu-usuario/calculadora-impostos.git](https://github.com/vhblaze/Calculadora-De-Impostos.git
Instale o ambiente PHP:

Você pode usar um servidor local como o XAMPP, WAMP, ou MAMP para rodar o projeto em seu computador.
Coloque os arquivos no servidor:

Coloque os arquivos no diretório do servidor web (exemplo: htdocs no XAMPP).
Acesse o arquivo index.html no seu navegador:

Abra o navegador e acesse http://localhost/calculadora-impostos/index.html.
Preencha os dados:

Insira o valor da compra e escolha o imposto que deseja calcular (ICMS ou ISS).
O sistema calculará o valor do imposto e o total a ser pago.
Exemplo de Cálculo
Se o valor da compra for R$ 1.000,00 e a alíquota do ICMS for 18% e do ISS for 5%, o sistema fará os seguintes cálculos:

ICMS: 18% de R$ 1.000,00 = R$ 180,00
ISS: 5% de R$ 1.000,00 = R$ 50,00
Valor Total com ICMS e ISS: R$ 1.000,00 + R$ 180,00 + R$ 50,00 = R$ 1.230,00
Melhorias Futuras
Integração com APIs: Integração com APIs do governo ou das Secretarias da Fazenda para obter as alíquotas de ICMS e ISS dinamicamente.
Validação de Dados: Adicionar validação para garantir que os valores inseridos sejam válidos (por exemplo, verificar se o valor da compra é um número positivo).
Design Responsivo: Melhorar a interface para garantir uma experiência melhor em dispositivos móveis.
Histórico de Cálculos: Implementar um sistema para salvar e exibir os cálculos feitos anteriormente.
Contribuições
Se você deseja contribuir para o projeto, sinta-se à vontade para enviar pull requests ou abrir issues.

Licença
Este projeto está licenciado sob a MIT License.
