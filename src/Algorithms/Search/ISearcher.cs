namespace Algorithms.Search;

/// <summary>
/// Defines a method for searching an item in a list.
/// </summary>
public interface ISearcher
{
    /// <summary>
    /// Finds the index of the specified item in the provided list.
    /// </summary>
    /// <typeparam name="T">
    /// The type of elements in the list. This type must implement the IComparable{T} interface.
    /// </typeparam>
    /// <param name="data">The list of elements to search through.</param>
    /// <param name="query">The item to search for in the list.</param>
    /// <returns>
    /// The index of the specified item if found; otherwise, -1.
    /// </returns>
    /// <exception cref="ArgumentNullException">Thrown when data or query is null.</exception>
    int FindIndex<T>(IList<T> data, T query) where T : IComparable<T>;
}
