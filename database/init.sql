CREATE TABLE IF NOT EXISTS equipamentos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  temperatura_atual NUMERIC(5, 2) NOT NULL,
  setpoint NUMERIC(5, 2) NOT NULL,
  criado_em TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO equipamentos (nome, temperatura_atual, setpoint)
SELECT 'CH01', 22.00, 23.00
WHERE NOT EXISTS (
  SELECT 1 FROM equipamentos WHERE nome = 'CH01'
);

INSERT INTO equipamentos (nome, temperatura_atual, setpoint)
SELECT 'CH02', 24.00, 23.00
WHERE NOT EXISTS (
  SELECT 1 FROM equipamentos WHERE nome = 'CH02'
);

INSERT INTO equipamentos (nome, temperatura_atual, setpoint)
SELECT 'CH03', 21.00, 22.00
WHERE NOT EXISTS (
  SELECT 1 FROM equipamentos WHERE nome = 'CH03'
);
