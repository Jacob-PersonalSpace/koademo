import supertest from 'supertest'
import { expect, assert } from 'chai'

import app from '../../src/app'

let request = supertest(app)

describe('GET /api/test', () => {
    it('case resolve', () => {
        return request.get('/api/test')
            .expect(200)
            .then(response => {
                expect(1).to.equal(1)
            })
    })
})

describe('GET /api/test2', () => {
    it('case resolve', () => {
        return request.get('/api/test2')
            .expect(200)
            .then(response => {
                expect(1).to.equal(1)
            })
    })
})
