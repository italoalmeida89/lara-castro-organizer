import { Button, Flex, PageTemplate, Typography } from "@components";

import * as S from "./styles";

export const Investment = () => {
  return (
    <PageTemplate
      id="investment"
      backgroundColor="var(--primary-color)"
      height="98vh"
    >
      <Flex direction="column" height="100%" justifyContent="center" gap={32}>
        <Typography size={48} align="center" variant="secondary">
          Invista na sua tranquilidade e na segurança do seu bebê
        </Typography>

        <Typography align="center">
          Nosso curso completo de organização baby está disponível por um valor
          único, proporcionando acesso a todos os módulos, bônus e materiais
          didáticos por 1 ano.
        </Typography>

        <S.Container>
          <S.Box>
            <Typography align="center" size={20} weight={600}>
              Valor do curso:
            </Typography>
            <Typography align="center">R$ 397,00 à vista</Typography>
          </S.Box>

          <S.Box>
            <Typography align="center" size={20} weight={600}>
              Para compra hoje:
            </Typography>
            <Typography align="center">12 x R$ 19,70</Typography>
            <Typography align="center" size={8}>
              ou
            </Typography>
            <Typography align="center">R$ 197,00 à vista</Typography>
          </S.Box>
        </S.Container>

        <Typography align="center" variant="secondary" size={32} color="var(--white)" weight={600}>
          Garanta uma chegada tranquila e organizada para o seu bebê!
        </Typography>

        <Flex width="100%" justifyContent="center">
          <Button variant="white">Inscreva-se agora</Button>
        </Flex>

        <Flex direction="column">
          <Typography align="center" size={10}>
            Oferecemos uma garantia de satisfação de 7 dias.
          </Typography>
          <Typography align="center" size={10}>
            Se por qualquer motivo você não estiver satisfeito com o curso,
            devolvemos todo o seu dinheiro!
          </Typography>
        </Flex>
      </Flex>
    </PageTemplate>
  );
};
