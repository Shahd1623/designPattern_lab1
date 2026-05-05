// Abstract Factory--> is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

// Abstract Product
class Chair {
  sitOn() {
    throw new Error("Method 'sitOn()' must be implemented");
  }

  hasLegs() {
    throw new Error("Method 'hasLegs()' must be implemented");
  }
}
class Sofa {
  lieOn() {
    throw new Error("Method 'lieOn()' must be implemented");
  }
}

// Concert Product
// for Chair
class VictorionChair extends Chair {
  sitOn() {
    console.log("You are sitting on victorian chair");
  }
  hasLegs() {
    console.log("This victorian chair has 4 elegant curved legs");
  }
}

class ModernChair extends Chair {
  sitOn() {
    console.log("You are sitting on Modern chair");
  }
  hasLegs() {
    console.log("This is Modern chair has 4 elegant curved legs");
  }
}

// For Sofa
class VictorionSofa extends Sofa {
  lieOn() {
    console.log("You are lying on victorian Sofa");
  }
}

class ModernSofa extends Sofa {
  lieOn() {
    console.log("You are lying on Modern Sofa");
  }
}

// Abstract Factory
class VictorianFactory {
  createChair() {
    return new VictorionChair();
  }
  createSofa() {
    return new VictorionSofa();
  }
}

class ModernFactory {
  createChair() {
    return new ModernChair();
  }
  createSofa() {
    return new ModernSofa();
  }
}

const factory1 = new ModernFactory();
const chair = factory1.createChair();
chair.hasLegs();
chair.sitOn();

const factory2 = new VictorianFactory();
const soffa = factory2.createSofa();
soffa.lieOn();
