describe('Namespace', function() {
  beforeEach(function() {
    this.namespace = new Namespace();
  });

  describe('#add', function() {
    it('should add a definition', function() {
      function foo() {};

      this.namespace.add('foo', foo);

      expect(this.namespace)
        .to.have.property('foo', foo);
    });

    it('should add a deeply nested definition', function() {
      function baz() {}
      this.namespace.add('foo.bar.baz', baz);

      expect(this.namespace)
        .to.have.property('foo')
        .that.has.property('bar')
        .that.has.property('baz', baz);
    });

    it('should build on top of existing definitions', function() {
      function foo() {}
      function bar() {}

      this.namespace.add('foo', foo);
      this.namespace.add('foo.bar', bar);

      expect(this.namespace)
        .to.have.property('foo', foo)
        .that.has.property('bar', bar);
    });

    it('should build on top of existing child definitions', function() {
      function foo() {}
      function bar() {}

      this.namespace.add('foo.bar', bar);
      this.namespace.add('foo', foo);

      expect(this.namespace)
        .to.have.property('foo', foo)
        .that.has.property('bar', bar);
    });
  });

  describe('#get', function() {
    it('should return an existing definition', function() {
      this.namespace.foo = function() {};

      expect(this.namespace.get('foo'))
        .to.equal(this.namespace.foo);
    });

    it('should return a deeply nested definition', function() {
      this.namespace.foo = { bar: { baz: function() {} } };

      expect(this.namespace.get('foo.bar.baz'))
        .to.equal(this.namespace.foo.bar.baz);
    });

    it('should return undefined for a nonexistant definition', function() {
      expect(this.namespace.get('foo'))
        .to.be.undefined;
    });

    it('should not create objects when getting definition', function() {
      this.namespace.get('foo');

      expect(this.namespace)
        .not.to.have.property('foo');
    });

    it('should return properties inside definitions', function() {
      this.namespace.foo = { bar: function() {} };
      expect(this.namespace.get('foo.bar'))
        .to.equal(this.namespace.foo.bar);
    });
  });
});
