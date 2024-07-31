using Algorithms.Search;

namespace Algorithms.Tests.Search;

[TestFixture]
public class LinearSearcherTests
{
    private ISearcher _searcher;

    [SetUp]
    public void Setup()
    {
        _searcher = new LinearSearcher();
    }

    [Test]
    public void FindIndex_ElementExists_ReturnsCorrectIndex()
    {
        // Arrange
        var data = new List<int> { 1, 3, 5, 7, 9 };
        const int query = 7;

        // Act
        var index = _searcher.FindIndex(data, query);

        // Assert
        Assert.That(index, Is.EqualTo(3));
    }

    [Test]
    public void FindIndex_ElementDoesNotExist_ReturnsNegativeOne()
    {
        // Arrange
        var data = new List<int> { 1, 3, 5, 7, 9 };
        const int query = 4;

        // Act
        var index = _searcher.FindIndex(data, query);

        // Assert
        Assert.That(index, Is.EqualTo(-1));
    }

    [Test]
    public void FindIndex_EmptyList_ReturnsNegativeOne()
    {
        // Arrange
        var data = new List<int>();
        const int query = 1;

        // Act
        var index = _searcher.FindIndex(data, query);

        // Assert
        Assert.That(index, Is.EqualTo(-1));
    }

    [Test]
    public void FindIndex_SingleElementList_ElementExists_ReturnsZero()
    {
        // Arrange
        var data = new List<int> { 1 };
        const int query = 1;

        // Act
        var index = _searcher.FindIndex(data, query);

        // Assert
        Assert.That(index, Is.EqualTo(0));
    }

    [Test]
    public void FindIndex_SingleElementList_ElementDoesNotExist_ReturnsNegativeOne()
    {
        // Arrange
        var data = new List<int> { 1 };
        const int query = 2;

        // Act
        var index = _searcher.FindIndex(data, query);

        // Assert
        Assert.That(index, Is.EqualTo(-1));
    }

    [Test]
    public void FindIndex_MultipleElementsWithDuplicate_ReturnsFirstOccurrenceIndex()
    {
        // Arrange
        var data = new List<int> { 1, 3, 3, 3, 5, 7, 9 };
        const int query = 3;

        // Act
        var index = _searcher.FindIndex(data, query);

        // Assert
        Assert.That(index, Is.EqualTo(1));
    }

    [Test]
    public void FindIndex_ThrowsArgumentNullException_WhenDataIsNull()
    {
        // Arrange
        IList<int> data = null;
        const int query = 1;

        // Act & Assert
        var ex = Assert.Throws<ArgumentNullException>(() => _searcher.FindIndex(data, query));
        Assert.That(ex.ParamName, Is.EqualTo("data"));
    }
}