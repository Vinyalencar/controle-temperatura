function createPostgresEquipmentRepository(pool) {
    return {
        async list() {
            const result = await pool.query(`
                SELECT
                    id,
                    nome,
                    temperatura_atual AS "temperaturaAtual",
                    setpoint
                FROM equipamentos
                ORDER BY id
            `)
            return result.rows
        },

        async updateSetpoint(id, setpoint) {
            const result = await pool.query(
                `
                UPDATE equipamentos
                SET setpoint = $1
                WHERE id = $2
                RETURNING
                    id,
                    nome,
                    temperatura_atual AS "temperaturaAtual",
                    setpoint
                `,
                [setpoint, id]
            )

            return result.rows[0]
        },
    }
}

module.exports = createPostgresEquipmentRepository