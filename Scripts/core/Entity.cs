using System;
using System.Collections.Generic;


namespace Ascend.Core
{
    public class Entity
    {
        public int Id { get; private set; }
        public string Name { get; private set; }
        private readonly Dictionary<Type, object> _components = new Dictionary<Type, object>();

        public Entity(string name)
        {
            Id = IdManager.GetNextId();
            Name = name;
        }

        public void AddComponent<T>(T component) where T : class
        {
            _components[typeof(T)] = component;
        }
        public void RemoveComponent<T>() where T : class
        {
            _components.Remove(typeof(T));
        }
        public bool HasComponent<T>() where T : class => _components.ContainsKey(typeof(T)) ;
        public T GetComponent<T>() where T : class
        {
            if (HasComponent<T>())
            {
                return (T)_components[typeof(T)];
            }
            return null;
        }
    }
}