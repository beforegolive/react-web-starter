module.exports={
	plugins:[
		require('autoprefixer')({
			browsers: ['last 5 versions']
		}),
		require('cssnano')({
			discardComments: {
        removeAll: true
      },
			discardUnused: false
		})
	]
}
