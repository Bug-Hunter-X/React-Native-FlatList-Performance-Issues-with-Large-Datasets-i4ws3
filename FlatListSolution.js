The solution involves optimizing the FlatList component to improve rendering performance. We can utilize the `windowSize` prop and potentially `getItemLayout`:

```javascript
<FlatList
  data={largeDataset}
  renderItem={({ item }) => <ListItem item={item} />}
  keyExtractor={(item) => item.id}
  windowSize={10} // Render only a subset of items around the visible area
  getItemLayout={(data, index) => (
    {
      length: ListItem.estimatedHeight,
      offset: ListItem.estimatedHeight * index,
      index,
    }
  )}
/>
```

`windowSize` controls how many items are rendered around the visible area.  `getItemLayout` provides the dimensions of each item, allowing for faster calculations and improved scrolling performance.  Make sure `ListItem` component has `estimatedHeight` property.