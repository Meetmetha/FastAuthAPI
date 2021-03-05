"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseRepository = void 0;
const Helpers_1 = require("../../helpers/Helpers");
const exceptions_1 = require("../../exceptions");
const BaseModel_1 = require("../BaseModel");
class DatabaseRepository {
    setModel(model) {
        this.model = model;
        return this;
    }
    async all() {
        return await this.query();
    }
    async firstWhere(inputs, error = true) {
        inputs = inputs || {};
        const query = this.query();
        const model = await query.findOne(inputs);
        if (error && Helpers_1.isEmpty(model))
            this.raiseError();
        return model;
    }
    async getWhere(inputs, error = true) {
        const query = this.query();
        for (const key in inputs) {
            Array.isArray(inputs[key])
                ? query.whereIn(key, inputs[key])
                : query.where(key, inputs[key]);
        }
        const models = await query;
        if (error && Helpers_1.isEmpty(models))
            this.raiseError();
        return models;
    }
    async create(inputs) {
        return await this.query().insertAndFetch(inputs);
    }
    async createOrUpdate(conditions, values) {
        const model = await this.firstWhere(conditions, false);
        if (!model) {
            return this.create(Object.assign(Object.assign({}, conditions), values));
        }
        await this.update(model, values);
        return await this.refresh(model);
    }
    async firstOrNew(conditions, values) {
        const model = await this.firstWhere(conditions, false);
        if (model)
            return model;
        return await this.create(Object.assign(Object.assign({}, conditions), values));
    }
    async update(model, setValues) {
        const query = this.query();
        query.findById(model.id).patch(setValues);
        return await query;
    }
    async updateWhere(where, setValues) {
        const query = this.query();
        query.where(where).patch(setValues);
        return await query;
    }
    async exists(params) {
        const query = this.query();
        query.where(params);
        return !!(await query.onlyCount());
    }
    async count(params) {
        const query = this.query();
        query.where(params);
        return await query.onlyCount();
    }
    async delete(model) {
        return !!+(await this.query().deleteById(model instanceof BaseModel_1.BaseModel ? model.id : model));
    }
    async deleteWhere(params) {
        const query = this.query();
        for (const key in params) {
            Array.isArray(params[key])
                ? query.whereIn(key, params[key])
                : query.where(key, params[key]);
        }
        return !!+(await query.delete());
    }
    async refresh(model) {
        return model ? await this.query().findById(model.id) : null;
    }
    async attach(model, relation, payload) {
        await model.$relatedQuery(relation).relate(payload);
        return;
    }
    async sync(model, relation, payload) {
        await model.$relatedQuery(relation).unrelate();
        if (Array.isArray(payload)) {
            for (const p of payload) {
                await model.$relatedQuery(relation).relate(p);
            }
            return;
        }
        await model.$relatedQuery(relation).relate(payload);
        return;
    }
    async chunk(where, size, cb) {
        const query = this.query();
        query.where(where);
        await query.chunk(cb, size);
        return;
    }
    raiseError() {
        throw new exceptions_1.ModelNotFoundException(this.getEntityName() + ' not found');
    }
    query() {
        return this.model.query();
    }
    getEntityName() {
        return this.model.name;
    }
}
exports.DatabaseRepository = DatabaseRepository;
//# sourceMappingURL=Database.js.map